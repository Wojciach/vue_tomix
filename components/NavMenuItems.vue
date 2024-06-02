<template>
                    <li>
                        <NuxtLink ref="homeLink" class="btn" to="/">
                            <BasicMenuItem title="Home" icon="home" :unfolded="isUnfolded('/')" />
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink ref="o_nasLink" class="btn" to="/o_nas">
                            <BasicMenuItem title="O nas" icon="group" :unfolded="isUnfolded('/o_nas')" />
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink ref="produktyLink" class="btn" to="/produkty">
                            <BasicMenuItem title="Produkty" icon="colors" :unfolded="isUnfolded('/produkty')" />
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink ref="uslugiLink" class="btn" to="/uslugi">
                            <BasicMenuItem title="Usługi" icon="format_paint" :unfolded="isUnfolded('/uslugi')" />
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink ref="galeriaLink" class="btn" to="/galeria">
                            <BasicMenuItem title="Galeria" icon="photo_camera" :unfolded="isUnfolded('/galeria')" />
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink ref="kalkulatorLink" class="btn" to="/kalkulator">
                            <BasicMenuItem title="Kalkulator" icon="calculate" :unfolded="isUnfolded('/kalkulator')" />
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink ref="kontaktLink" class="btn" to="/kontakt">
                            <BasicMenuItem title="Kontakt" icon="call" :unfolded="isUnfolded('/kontakt')" />
                        </NuxtLink>
                    </li>
</template>

<script lang="ts" setup>

const props = defineProps({
  unfolded: {
    type: Boolean,
    required: true,
  }
});

const route = useRoute();

function isUnfolded(elementPath: string) {
    if (props.unfolded === true) return true;
    else if (elementPath === route.path) {
        return true; 
    } else {
        return false;
    }
}


</script>

<style>

</style>