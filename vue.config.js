
module.exports = {
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "@/assets/styles/vuetils.scss";`
            }
        }
    },
    filenameHashing: false
};