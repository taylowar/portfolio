'use server'

export const processEmail = async (formData: FormData) => {
    console.log(formData.get('email'));
    console.log(formData.get('message'));
};
