<script>
import users from '~/static/data.json'

export default {
  name: 'TheBasics',
  data() {
    return {
      users,
      currentPage: 1,
      totalPages: 0,
      selectedRows: [],
      filters: {
        name: { value: '', keys: ['name'] },
        age: { value: { min: 0, max: 100 }, custom: this.ageFilter }
      }
    }
  },
  methods: {
    ageFilter(filterValue, row) {
      return row.age >= filterValue.min && row.age <= filterValue.max
    },
    nameLength(row) {
      return row.name.length; // TODO - submit a PR to remove unnecessary template literal
    },
    dateSort(a, b) {
      const date1 = new Date(a.registered).getTime();
      const date2 = new Date(b.registered).getTime();

      return date1 - date2;
    }
  }
}
</script>


<template >
  <div class="card">
    <div class="card-body">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <a href="#">Home</a>
          </li>
          <li class="breadcrumb-item">
            <a href="#">Library</a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">Data</li>
        </ol>
      </nav>

      <div class="alert alert-primary" role="alert">
        This is a primary alert with
        <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
      </div>

      <label>Filter by Name</label>
      <input v-model="filters.name.value" class="form-control" />

      <base-input></base-input>

      <base-button>My Button</base-button>

      <div class="mt-3 alert alert-success" role="alert">
        <h4 class="alert-heading">Well done!</h4>
        <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
        <hr />
        <p
          class="mb-0"
        >Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
      </div>

      <div class="table-responsive">
        <v-table
          ref="usersTable"
          class="table table-striped table-bordered table-hover table-sm"
          :data="users"
          :filters="filters"
          selection-mode="multiple"
          selected-class="table-info"
          allow-selection
          @selectionChanged="selectedRows = $event"
        >
          <caption>List of users</caption>
          <thead slot="head">
            <v-th
              style="white-space: nowrap"
              :custom-sort="dateSort"
              default-sort="desc"
              scope="col"
            >Registered</v-th>
            <v-th style="white-space: nowrap" :sort-key="nameLength" scope="col">Name</v-th>
            <v-th style="white-space: nowrap" sort-key="age" scope="col">Age</v-th>
            <v-th style="white-space: nowrap" sort-key="address.state" scope="col">State</v-th>
          </thead>
          <tbody slot="body" slot-scope="{displayData}">
            <v-tr v-for="row in displayData" :key="row.guid" :row="row">
              <td>{{ row.registered }}</td>
              <td>
                <img class="rounded-circle" :src="row.picture" />
                <a href="#">{{ row.name }}</a>
              </td>
              <td class="text-right">{{ row.age }}</td>
              <td>
                <a href="#">{{ row.address.state }}</a>
              </td>
            </v-tr>
          </tbody>
        </v-table>
      </div>

      <strong>Selected:</strong>
      <div v-if="selectedRows.length === 0" class="text-muted">No Rows Selected</div>
      <ul>
        <li v-for="selected in selectedRows" :key="selected">{{ selected.name }}</li>
      </ul>
    </div>
  </div>
</template>
