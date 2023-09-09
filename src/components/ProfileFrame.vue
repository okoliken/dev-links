

<template>
    <div class="flex items-center justify-center flex-col">
        <!-- profile -->
        <div>
            <div class="w-[96px] h-[96px] bg-[#EEEEEE] rounded-full">

            </div>

            <div v-if="false">
               <img loading="lazy" src="" alt="">
            </div>
        </div>
        <!-- end -->
        <!-- title -->
        <div class="bg-[#EEEEEE] rounded-[104px] w-[160px] h-[16px] mt-6">
        </div>
        <!-- end -->
        <!-- email -->
        <div class="bg-[#EEEEEE] rounded-[104px] w-[72px] h-[8px] mt-6">
        </div>
        <!-- end -->

        <!-- links -->
       <div  class="mt-12 w-[230px]">
        <div v-for="i in 5" class="bg-[#EEEEEE] rounded-[8px] h-[44px] w-full mb-4"></div>
       </div>
        <!-- end -->
</div>
</template>