export const addArticle = article => ({ type: 'ADD_USER', payload: article });
export const addView = view => ({ type: 'VIEW', payload: view });
export const addSort = sort => ({ type: 'SORT', payload: sort });
export const addFilter = filter => ({ type: 'FILTER', payload: filter });
export const addPagination = page => ({ type: 'PAGE', payload: page });
export const addProfile = (profile, inforepo) => ({ type: 'PROFILE', payload: profile, repo: inforepo });
export const addFollowers = follow => ({ type: 'FOLLOW', payload: follow });
export const addFollowing = following => ({ type: 'FOLLOWING', payload: following });
export const addLogin = login => ({ type: 'LOGIN', payload: login });
export const addComment = (comment, id, avatarurl) => ({
    type: 'COMMENT', payload: comment, commentid: id, photo: avatarurl,
});
export const addId = data => ({ type: 'ID', payload: data });
