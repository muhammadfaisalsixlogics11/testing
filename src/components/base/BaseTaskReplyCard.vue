<template>
  <li
    :class="{
      'q-timeline__entry base-task-reply-card': true,
      'q-timeline__entry--right': true,
      'q-timeline__entry--icon': has_icon,
    }"
  >
    <div v-if="!creating && hasUser" class="q-timeline__subtitle">
      <span>{{ title }}</span>
      <span v-if="created_at" class="q-ml-sm text-grey-8 text-weight-medium">
        {{ created_at }}
      </span>
    </div>
    <div :class="`q-timeline__dot text-${color}`">
      <img v-if="avatar" class="q-timeline__dot-img" :src="avatar" />
      <q-icon v-else-if="icon" :name="icon" />
      <base-avatar
        class="q-timeline__dot-img"
        :tooltip="false"
        size="30px"
        v-else-if="currentUser"
        :user="currentUser"
      />
    </div>
    <div class="q-timeline__content">
      <template v-if="creating">
        <q-input
          class="note-editor q-mb-sm"
          :placeholder="$t('placeholder.leaveReply')"
          outlined
          v-model="note.message"
          type="textarea"
          autogrow
        >
        </q-input>
      </template>
      <template v-else>
        <q-item style="min-height: auto" dense class="q-pa-none">
          <q-item-section>
            <q-item-label>
              <div v-html="getMessage"></div>
            </q-item-label>
          </q-item-section>
          <q-item-section v-if="!hasUser" side>
            <span v-if="created_at" class="q-ml-sm text-grey-8">
              {{ created_at }}
            </span>
          </q-item-section>
        </q-item>
      </template>
      <div v-if="getMedia.length" class="q-pt-sm files">
        <div class="row q-col-gutter-sm">
          <div
            v-for="(media, index) in getMedia"
            :key="media.id"
            class="col-sm-2 col-xs-12"
          >
            <base-media-card
              :creating="creating"
              :media="media"
              @remove="note.media.splice(index, 1)"
            />
          </div>
        </div>
      </div>
      <template v-if="creating">
        <div class="actions-buttons flex q-gutter-sm items-center">
          <q-space v-if="$q.screen.gt.xs" />
          <q-checkbox
            :model-value="archived"
            @update:model-value="onChangeArchived"
            :label="$t('archived')"
            dense
          />
          <task-status
            v-if="isAdmin"
            v-model="note.status"
            :prefix="$t('prefix.status')"
          />
          <base-btn
            class="main-btn"
            color="grey-5"
            icon="far fa-paperclip"
            :label="$t('attachFile')"
            @click="onAttachFile"
          />
          <base-btn
            :loading="loading"
            class="main-btn"
            color="primary"
            :label="$t('reply')"
            icon="fas fa-paper-plane"
            @click="onSubmit"
            :disable="disable"
          />
        </div>
      </template>
    </div>
  </li>
</template>

<script>
import { cloneDeep } from "lodash";
import { useAppStore } from "stores/app";
import { mapActions, mapState } from "pinia";
import FileSelector from "../FileSelectorDialog.vue";
import { useTaskStore } from "stores/task";
import TaskStatus from "../EnquiryStatus.vue";

const note = {
  status: null,
  message: null,
  media: [],
};

export default {
  components: { TaskStatus },
  props: {
    id: [String, Number],
    avatar: {
      type: [Boolean, String],
      required: false,
      default: false,
    },
    user: {
      type: [Boolean, Object],
      required: false,
      default: false,
    },
    icon: {
      type: [Boolean, String],
      required: false,
      default: false,
    },
    archived: Boolean,
    creating: Boolean,
    isAdmin: Boolean,
    message: String,
    created_at: String,
    media: Array,
    moduleId: [String, Number],
  },
  data() {
    return {
      loading: false,
      note: cloneDeep(note),
      default: cloneDeep(note),
    };
  },
  emits: ["create", "update:archived"],
  methods: {
    ...mapActions(useTaskStore, ["reply"]),
    onSubmit() {
      console.func(
        "components/base/BaseNoteCard:methods.onSubmit()",
        arguments
      );
      this.loading = true;
      this.reply({
        ...this.$props,
        ...this.note,
      })
        .then(({ data, message }) => {
          this.note = cloneDeep(note);
          this.default = cloneDeep(note);
          this.$q.notify(message);
          this.$emit("create", data);
          this.loading = false;
        })
        .catch((error) => {
          this.loading = false;
          this.$core.error(error, { title: this.$t("dialog.title.error") });
        });
    },
    onChangeArchived(value) {
      console.func(
        "components/base/BaseNoteCard:methods.onChangeArchived()",
        arguments
      );
      this.$emit("update:archived", value);
    },
    onAttachFile() {
      console.func(
        "components/base/BaseTaskReplyCard:methods.onAttachFile()",
        arguments
      );
      this.$q
        .dialog({
          component: FileSelector,
          componentProps: {
            title: this.$t("attachFile"),
            multiple: true,
          },
        })
        .onOk((payload) => {
          console.func(
            "components/base/BaseTaskReplyCard:methods.onAttachFile.onOk()",
            payload
          );
          this.note.media = payload;
        });
    },
  },
  computed: {
    ...mapState(useAppStore, {
      current: "user",
    }),
    currentUser() {
      return this.creating ? this.current : this.user;
    },
    color() {
      return this.$parent.color || "primary";
    },
    title() {
      return this.user ? this.user.name : "";
    },
    hasUser() {
      return Boolean(this.user);
    },
    has_icon() {
      return this.icon || this.avatar || this.user || this.creating;
    },
    disable() {
      return JSON.stringify(this.note) === JSON.stringify(this.default);
    },
    getMessage() {
      return this.message
        ? this.message.replace(/\r?\n/g, "<br/>")
        : this.message;
    },
    getMedia() {
      return this.media || this.note.media;
    },
  },
};
</script>
<style scoped lang="scss">
.q-timeline__subtitle {
  text-transform: none;
  opacity: 1;
  margin: 0;
  padding: 0;
}
.q-timeline__entry {
  .actions {
    visibility: hidden;
  }
  &:hover .actions,
  .active {
    visibility: visible;
  }
}
</style>
