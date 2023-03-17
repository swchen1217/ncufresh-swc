<template>
  <div class="border border-black rounded-xl p-2 mt-4">
    <div class="justify-between flex"><span class="font-bold">{{comment.author}}:</span><div>Created at {{new Date(comment.timestamp).toLocaleString()}}<span class="ml-2 mr-1 text-black hover:text-red-400" v-if="comment.deleteAble"><i class="fa-solid fa-trash fa-lg"></i></span></div></div>
    <p class="indent-8">{{comment.content}}</p>
  </div>
</template>

<script>
export default {
  name: "Comment",
  props: ["comment"],
}
</script>

<style scoped>

</style>