

const models = {

}

export const associate = () => {
    Object.values(models).forEach((model:any) => {
        if(model.associate) {
            model.associate(models)
        }
    })
}