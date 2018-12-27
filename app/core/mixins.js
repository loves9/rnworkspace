export default {
    /**
     * 设置页面标题
     *
     * @param {string} title
     */
    setTitle(title) {},

    /**
     * 页面push方法
     * @param url
     * @param options
     */
    easyPush(url, options) {
        // if (this.$core) {
        //     this.$core.RouterManager.push(url, options, this)
        // }
    },

    /**
     * 页面pop方法
     * @param options
     * @return 调用是否成功。
     */
    easyPop(options) {
        if (this.$core) {
            if (typeof options === "string") {
                options = {
                    url: options
                };
            }

            this.$core.RouterManager.pop(options, this);
            return true;
        }
        return false;
    },

    /**
     * 获取页面传递的参数
     */
    easyGetParams() {
        if (this.$router) {
            return this.$route.query;
            // return new Promise((resolve, reject) => {
            //     let query = this.$route.query;
            //     if (Object.keys(query).length !== 0) {
            //         resolve(query);
            //     } else {
            //         let params = this.$route.params;
            //         if (Object.keys(params).length !== 0) {
            //             resolve(params);
            //         } else {
            //             resolve({});
            //         }
            //     }
            // });
        }

        return {};
    }
};
