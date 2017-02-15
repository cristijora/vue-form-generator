<template>
    <div>
        <div class="col-md-6">
            <form>
                <h4>
                    Different form inputs support
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
    import Schema from "./schemas/inputs"
    export default{
        mixins: [prettyModelMixin],
        data(){
            return {
                model: {
                    simple: "",
                    withPlaceHolder: "",
                    passwordWithValidation: "",
                    email: "",
                    disabled: "Filled in input value",
                    hidden: "Hidden input value",
                    number: 1,
                    range: 10,
                    color: "#9b8804"
                },
                schema: Schema,
                formOptions: {
                    validateAfterChanged: true
                },
            }
        },
    }
</script>
