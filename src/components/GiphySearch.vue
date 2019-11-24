<template>
  <div class="pl-3 pr-3 pa-3 pb-3">
    <b-form-input class="mb-3" placeholder="Type to Search" type="search" id="filterInput"></b-form-input>
    <div id="scrollspy-nested" style="position:relative; height:350px; overflow-y:auto">
      <b-table striped hover bordered :items="items" id="giphy-table"></b-table>
    </div>
    <b-pagination
      align="right"
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="giphy-table"
    ></b-pagination>
    <b-button class="pull-right" variant="outline-secondary">Load More</b-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

export default class GipgySearchComponent extends Vue {
  private items: any[] = [
    {
      isActive: true,
      age: 40,
      first_name: "Dickerson",
      last_name: "Macdonald"
    },
    { isActive: false, age: 21, first_name: "Larsen", last_name: "Shaw" },
    { isActive: false, age: 89, first_name: "Geneva", last_name: "Wilson" },
    { isActive: true, age: 38, first_name: "Jami", last_name: "Carney" },
    {
      isActive: true,
      age: 40,
      first_name: "Dickerson",
      last_name: "Macdonald"
    },
    { isActive: false, age: 21, first_name: "Larsen", last_name: "Shaw" },
    { isActive: false, age: 89, first_name: "Geneva", last_name: "Wilson" },
    { isActive: true, age: 38, first_name: "Jami", last_name: "Carney" },
    {
      isActive: true,
      age: 40,
      first_name: "Dickerson",
      last_name: "Macdonald"
    },
    { isActive: false, age: 21, first_name: "Larsen", last_name: "Shaw" },
    { isActive: false, age: 89, first_name: "Geneva", last_name: "Wilson" },
    { isActive: true, age: 38, first_name: "Jami", last_name: "Carney" }
  ];
  private rows: number = this.items.length;
  private perPage: number = 4;
  private currentPage: number = 1;
}
</script>
<style lang="postcss" scoped>
.pull-right {
  float: right;
}
</style>
