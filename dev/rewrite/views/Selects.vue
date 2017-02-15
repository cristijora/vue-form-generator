<template>
    <div>
        <div class="col-md-6">
            <form>
                <h4>
                    Selects
                </h4>
                <vue-form-generator :model="model"
                                    :schema="schema"
                                    :options="formOptions"
                                    ref="form">
                </vue-form-generator>
            </form>
        </div>
        <div class="col-md-6">
            <div class="alert alert-info">Real time model binding</div>
            <pre v-if="model" v-html="prettyModel"></pre>
        </div>
    </div>
</template>
<script>
    import {prettyModelMixin} from "./mixins/index"
    import {validators} from "../../../src";
    import Schema from "./schemas/selects"

    import Vue from "vue";
    import Multiselect from "vue-multiselect"
    Vue.component("multiselect", Multiselect);
    export default{
        mixins: [prettyModelMixin],
        data(){
            return {
                model: {
                    simple: "Personal",
                    withObjects: "",
                    dynamic: "",
                    vueMultiSelect: ["VueJS", "CSS3"],
                    selectEx: [],
                    objectSelection: [],
                },
                schema: Schema,
                formOptions: {
                    validateAfterChanged: true
                },
            }
        },
    }
</script>
