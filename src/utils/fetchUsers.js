export const fetchUsers = async (url) => {
    try {
        const responce = await fetch(url);
        const data = await responce.json();

        return data
    } catch (e) {
        throw new Error(e);
    }

}