<template>
                    <li>
                        <NuxtLink ref="homeLink" class="btn" to="/">
                            <BasicMenuItem title="Home" icon="home" :unfolded="isUnfolded('/')" />
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink ref="o_nasLink" class="btn" to="/o-nas-remonty-elewacje-malowanie">
                            <BasicMenuItem title="O nas" icon="group" :unfolded="isUnfolded('/o-nas-remonty-elewacje-malowanie')" />
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink ref="produktyLink" class="btn" to="/produkty-renowacja-elewacji">
                            <BasicMenuItem title="Produkty" icon="colors" :unfolded="isUnfolded('/produkty-renowacja-elewacji')" />
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink ref="uslugiLink" class="btn" to="/uslugi-elewacje-gladzie-malowanie">
                            <BasicMenuItem title="Usługi" icon="format_paint" :unfolded="isUnfolded('/uslugi-elewacje-gladzie-malowanie')" />
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink ref="galeriaLink" class="btn" to="/galeria-remonty-elewacji">
                            <BasicMenuItem title="Galeria" icon="photo_camera" :unfolded="isUnfolded('/galeria-remonty-elewacji')" />
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink ref="kalkulatorLink" class="btn" to="/kalkulator-ceny-gladzie-natryskowe-malowanie">
                            <BasicMenuItem title="Kalkulator" icon="calculate" :unfolded="isUnfolded('/kalkulator-ceny-gladzie-natryskowe-malowanie')" />
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink ref="kontaktLink" class="btn" to="/kontakt-firma-remonty">
                            <BasicMenuItem title="Kontakt" icon="call" :unfolded="isUnfolded('/kontakt-firma-remonty')" />
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