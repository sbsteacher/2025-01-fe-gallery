<script setup>
import { reactive } from 'vue';
import { useRouter } from 'vue-router';

const state = reactive({
    form: {
        name: ''
    }
});

</script>

<template>
    <form class="forder-form" @submit.prevent="submit">
         <div class="container">
            <div class="py-5 text-center">
                <div class="h4">
                    <b>상품 등록</b>
                </div>                
            </div>

            <div>
                 <div class="h5 mb-3">
                    <b>상품 정보</b>
                </div>

                <div class="row g-3">
                    <div class="col-12">
                        <label for="name" class="form-label">상품명</label>
                        <input type="text" class="form-control p-3" id="name" v-model="state.form.name">
                    </div>

                    <div class="col-12">
                        <label for="price" class="form-label">가격</label>
                        <input type="number" class="form-control p-3" id="price" v-model="state.form.price">
                    </div>

                    <div class="col-12">
                        <label for="discount" class="form-label">할인율</label>
                        <input type="number" class="form-control p-3" id="discount" v-model="state.form.discountPer">
                    </div>

                    <div class="col-12 pt-1">
                        <label for="img" class="form-label">이미지</label>
                        <input type="file" hidden class="form-control p-3">
                        <button class="w-100 btn btn-primary py-4 mt-4">파일 선택</button>
                    </div>
                </div>
            </div>
        </div>
    </form>
</template>

<style scoped>

</style>