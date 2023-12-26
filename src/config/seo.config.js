const SITE_NAME = 'Online bank'

export const getTitle = (title) => {
    console.log(title)
    return title ? `${title} | ${SITE_NAME}`: SITE_NAME
};