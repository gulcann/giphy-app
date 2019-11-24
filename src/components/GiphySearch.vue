<template>
  <div class="pl-3 pr-3 pa-3 pb-3">
    <b-form-input
      class="mb-3"
      placeholder="Type to Search"
      type="search"
      id="filterInput"
      v-model="searchTerm"
    ></b-form-input>
    <div
      id="scrollspy-nested"
      style="position:relative; height:350px; overflow-y:auto"
      @scroll="onScroll"
    >
      <b-table
        striped
        hover
        bordered
        small
        responsive="sm"
        :items="items"
        id="giphy-table"
      >
        <template v-slot:cell(images)="row">
          <b-button size="sm" @click="row.toggleDetails" class="mr-2">
            {{ row.detailsShowing ? "Hide" : "Show" }}
            Images Details
          </b-button>
        </template>

        <template v-slot:row-details="row">
          <b-card>
            <b-row class="mb-2">
              <b-col sm="3" class="text-sm-center"
                ><b>{{ row.item.images }}</b></b-col
              >
            </b-row>
            <b-button size="sm" @click="row.toggleDetails"
              >Hide Images Details</b-button
            >
          </b-card>
        </template>
      </b-table>
    </div>
    <b-pagination
      align="right"
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="giphy-table"
    ></b-pagination>
    <b-button
      class="pull-right"
      variant="outline-secondary"
      @click="getSearchGiphies"
      >Load More</b-button
    >
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import GiphyService from "../service/giphy.service";

@Component
export default class GipgySearchComponent extends Vue {
  private items: any[] = [];
  private rows: number = this.items.length;
  private perPage: number = 20;
  private currentPage: number = 1;
  private searchTerm: string = "";

  async beforeMount() {
    await this.getGiphies();
  }
  async getGiphies() {
    await GiphyService.getTrendingGifs().then(data => {
      this.items = data.data;
    });
  }
  async getSearchGiphies() {
    await GiphyService.getSearchGiphies(this.searchTerm).then(data => {
      this.items = data.data;
    });
  }
  async onScroll({
    target: { scrollTop = 0, clientHeight = 0, scrollHeight = 0 }
  }) {
    if (scrollTop + clientHeight == scrollHeight) {
      if (this.searchTerm) {
        await GiphyService.getSearchGiphies(this.searchTerm).then(data => {
          this.items = [...this.items, ...data.data];
        });
      } else {
        await GiphyService.getTrendingGifs().then(data => {
          this.items = [...this.items, ...data.data];
          console.log("count:", this.items.length);
        });
      }
      this.currentPage += 1;
      console.log("page count:", this.currentPage);
    }
  }
}
</script>
<style lang="postcss" scoped>
.pull-right {
  float: right;
}
</style>
