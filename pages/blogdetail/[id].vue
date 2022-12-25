<script setup lang="ts">


const route = useRoute()

// อ่านข้อมูลจาก API โดยใช้ useFetch
const { data:product,pending } = await useFetch(`https://www.itgenius.co.th/sandbox_api/mrta_flutter_api/public/api/news/${route.params.id}`)

// console.log(product)
// console.log(route.params.id)

</script>




<template>
    
    <div class="mb-5">
        <div v-if="!pending">
            <div class="wrapper">
                <v-row justify="center">
                <v-col cols="12" sm="10" md="9" lg="7">
                    <div class="text-center">
                    <h2 class="ui-title font-weight-bold text-white mb-4 mt-5">{{ product.topic }}</h2>
                    </div>
                </v-col>
                </v-row>
            </div>

            <v-container>
                <img :src="product.imageurl" :alt="product.topic" class="w-100">
                <h3 class="my-4">{{ product.detail }}</h3>
                <p class="my-4">{{ product.created_at }}</p>
                <a :href="product.linkurl" target="_blank">อ่านเพิ่มเติม</a><br>
                <!-- button back -->
    <v-btn color="primary"
        fab
        dark
        fixed
        bottom
        left
        class="mb-5 ml-5"
        @click="() => $router.go(-1)">
        <v-icon>mdi-arrow-left</v-icon>
    </v-btn>
            </v-container>
        </div>
        <div class="text-center py-10" v-else>Loading...</div>
        
    </div>

    

</template>



<style scoped>

</style>