import {filters} from "../../filters/prettyJSONFilter";
export default {
    filters: filters,
    computed: {
        prettyModel(){
            return filters.prettyJSON(this.model);
        }
    },
}