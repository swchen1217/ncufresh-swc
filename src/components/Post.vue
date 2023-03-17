<template>
  <div class="m-5 bg-blue-50 border-2 border-blue-300 rounded-3xl p-3 border-dotted">
    <div class="text-2xl px-6 pb-2 font-semibold border-b-gray-400 border-b-2 border-opacity-80 justify-between flex">{{post.title}}<span class="text-right inline-block text-xl text-gray-500 pt-1">By {{post.author}}</span></div>
    <div class="font-bold px-2 my-3 whitespace-pre-wrap">
      {{post.content}}
    </div>
    <div class="p-2 border-t-gray-400 border-t-2 border-opacity-80">
      <p class="px-4 text-xl font-semibold -mb-2">留言區</p>
      <div>
        <Comment v-for="comment in post.comments" v-bind:comment="comment"/>
      </div>
      <div class="border-2 border-blue-300 rounded-xl p-2 mt-4">
        <form>
          <label for="comment" class="block mb-2 ml-4 text-lg font-bold">我要留言</label>
          <input type="search" id="search" class="block w-full p-3 pl-6 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none" placeholder="留言......" required>
          <button type="submit" class="text-white absolute right-2.5 bottom-1.5 bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2">送出</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Comment from "@/components/Comment.vue";
export default {
  name: "Post",
  components: {Comment},
  props: ["post"],
}
</script>

<style scoped>

</style>