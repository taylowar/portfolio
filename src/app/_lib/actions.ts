'use server'

export const processEmail = async (formData: FormData) => {
    console.log(formData.get('email'));
    console.log(formData.get('message'));
    await new Promise((resolve, _) => {
        setTimeout(() => {
            console.log('FU');
            return resolve(true);
        }, 1000)
    });
};
