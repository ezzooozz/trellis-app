<template>
  <v-flex xs12>
    <v-container>
      <v-toolbar flat>
        <v-toolbar-title>
          {{$t('users')}}
        </v-toolbar-title>
        <v-spacer />
        <Permission :requires="TrellisPermission.ADD_USER">
          <v-btn
            icon
            @click="userToEdit = null; showEditUser = true">
            <v-icon>add</v-icon>
          </v-btn>
        </Permission>
      </v-toolbar>
      <v-data-table
        :headers="headers"
        :items="users"
        :loading="isLoading"
        :total-items="total"
        :rows-per-page-items="[25, 50, 100]"
        :rows-per-page-text="$t('rows_per_page')"
        :pagination.sync="pagination">
        <UserRow
          slot="items"
          slot-scope="props"
          :user="props.item"
          @edit="editUser(props.item)"
          @remove="removeUser(props.item)" />
      </v-data-table>
    </v-container>
    <TrellisModal
      v-model="showEditUser"
      :title="!userToEdit ? $t('new_user_title') : $t('edit_user_title', [userToEdit.name])">
      <UserEdit
        :user="userToEdit"
        @save="saveUser" />
    </TrellisModal>
  </v-flex>
</template>

<script lang="ts">
  import Permission from '../components/Permission'
  import User from '../entities/Trellis/User'
  import UserEdit from '../components/user/UserEdit'
  import UserRow from '../components/user/UserRow'
  import DiffService from '../services/DiffService'
  import UserService from '../services/user/UserService'
  import TrellisModal from '../components/TrellisModal'
  import Vue from 'vue'
  import DocsLinkMixin from '../mixins/DocsLinkMixin'
  import IsAdminMixin from '../mixins/IsAdminMixin'
  import DocsFiles from '../components/documentation/DocsFiles'

  export default Vue.extend({
    name: 'Users',
    components: { UserRow, UserEdit, TrellisModal, Permission },
    mixins: [DocsLinkMixin(DocsFiles.users.intro), IsAdminMixin],
    data () {
      return {
        users: [],
        total: 25,
        showEditUser: false,
        userToEdit: null,
        isLoading: false,
        pagination: {
          descending: false,
          page: 1,
          rowsPerPage: 25,
          sortBy: 'name'
        }
      }
    },
    created () {
      this.loadUsers()
    },
    computed: {
      headers (): object[] {
        return [{
          text: this.$t('actions'),
          sortable: false
        }, {
          text: this.$t('name'),
          value: 'name'
        }, {
          text: this.$t('username'),
          value: 'username'
        }, {
          text: this.$t('role'),
          value: 'role'
        }, {
          text: this.$t('studies'),
          sortable: false
        }]
      }
    },
    watch: {
      pagination: {
        handler (newVal, oldVal) {
          if (!DiffService.objectsAreEqualByProps(newVal, oldVal, ['descending', 'page', 'rowsPerPage', 'sortBy'])) {
            this.loadUsers()
          }
        },
        deep: true
      }
    },
    methods: {
      async editUser (user: User) {
        this.showEditUser = true
        this.userToEdit = user
      },
      async loadUsers () {
        try {
          this.isLoading = true
          const page = await UserService.getPage(this.pagination.page - 1, this.pagination.rowsPerPage, this.pagination.sortBy, this.pagination.descending)
          this.total = page.total
          this.users = page.data
          console.log('users', this.users)
        } catch (err) {
          if (this.isNotAuthError(err)) {
            this.logError(err, 'Unable to load users')
          }
        } finally {
          this.isLoading = false
        }
      },
      async removeUser (user: User) {
        if (confirm(this.$t('confirm_resource_delete', [user.name]) as string + ' ' + this.$t('cannot_undo'))) {
          try {
            this.isLoading = true
            await UserService.deleteUser(user.id)
            const index = this.users.indexOf(user)
            if (index > -1) {
              this.users.splice(index, 1)
            }
            this.alert('success', this.$t('resource_deleted', [user.name]))
          } catch (err) {
            if (this.isNotAuthError(err)) {
              this.logError(err, this.$t('failed_resource_delete', [user.name]))
            }
          } finally {
            this.isLoading = false
          }
        }
      },
      async createUser (user: User) {
        try {
          this.isLoading = true
          user = await UserService.createUser(user)
          this.users.push(user)
          this.alert('success', this.$t('resource_created', [user.name]))
          this.showEditUser = false
        } catch (err) {
          if (this.isNotAuthError(err)) {
            this.logError(err, this.$t('failed_resource_create', [user.name]))
          }
        } finally {
          this.isLoading = false
        }
      },
      async updateUser (user: User) {
        try {
          this.isLoading = true
          user = await UserService.updateUser(user)
          const index = this.users.findIndex(u => user.id === u.id)
          this.users.splice(index, 1, user)
          this.alert('success', this.$t('resource_updated', [user.name]))
          this.showEditUser = false
        } catch (err) {
          if (this.isNotAuthError(err)) {
            this.logError(err, this.$t('failed_resource_update', [user.name]))
          }
        } finally {
          this.isLoading = false
        }
      },
      async saveUser (user: User) {
          if (user.id) {
            this.updateUser(user)
          } else {
            this.createUser(user)
          }
      }
    }
  })
</script>
