import axios from 'axios';

const initialState = {
    articles: [],
    view: 'list_view',
    sort: '',
    filter: '',
    profiles: [],
    repo: [],
    follower: [],
    following: [],
    logg: [],
    repo_comment: [],
    repobasedname: [],
};
let user = [];
let sorteddata = [];
let filterdata = [];
let repodata = [];
let dumb = [];
const fred = [];

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_USER':

            axios.get(`https://api.github.com/search/users?q=${action.payload.title}`).then((res) => {
                user = res.data.items;
            });
            return {
                ...state, articles: user, view: state.view, dummy: user,
             };

        case 'VIEW':

            return { ...state, view: action.payload };

        case 'SORT':

            if (action.payload.data === 'score_ascending') {
                let sortthings = [];
                sortthings = state.articles;
                sortthings.sort((a, b) => a.score - b.score);
                sorteddata = sortthings;
            } else if (action.payload.data === 'score_descending') {
                let sortthings = [];
                sortthings = state.articles;
                sortthings.sort((a, b) => b.score - a.score);
                 sorteddata = sortthings;
            } else if (action.payload.data === 'name_ascending') {
                let sortthings = [];
                sortthings = state.articles;
                sortthings.sort((a, b) => {
                    const Aname = a.login.toLowerCase();
                    const Bname = b.login.toLowerCase();
                    if (Aname < Bname) {
                        return -1;
                    }
                    if (Aname > Bname) {
                        return 1;
                    }

                        return 0;
                });
                sorteddata = sortthings;
            } else if (action.payload.data === 'name_descending') {
                let sortthings = [];
                sortthings = state.articles;
                sortthings.sort((a, b) => {
                    const Aname = a.login.toLowerCase();
                    const Bname = b.login.toLowerCase();
                    if (Aname > Bname) {
                        return -1;
                    }
                    if (Aname < Bname) {
                        return 1;
                    }

                        return 0;
                });
                sorteddata = sortthings;
            }

            return { ...state, sort: action.payload.data, articles: sorteddata };

        case 'FILTER':

        if (action.payload.data === 'score_50') {
                let sortthings = [];
                sortthings = state.articles;
                filterdata = sortthings.filter(number => number.score < 55);
        } else if (action.payload.data === 'All') {
                filterdata = state.dummy;
        } else if (action.payload.data === 'score_50_100') {
                let sortthings = [];
                sortthings = state.articles;
                filterdata = sortthings.filter((number) => {
                    if (number.score > 50 && number.score < 100) {
                        return number.score;
                    }
                });
        } else if (action.payload.data === 'score_100') {
            let sortthings = [];
            sortthings = state.articles;
            filterdata = sortthings.filter(number => number.score > 100);
        }

                return { ...state, articles: filterdata };
            case 'PROFILE':
                return { ...state, profiles: action.payload.infouser, repo: action.payload.inforepo };

            case 'FOLLOW':
                return { ...state, follower: action.payload.info };
            case 'FOLLOWING':
                return { ...state, following: action.payload.info };
            case 'LOGIN':
                return { ...state, logg: action.payload.pass };

            case 'COMMENT':
                fred.push({ id: action.payload, comment: action.commentid, avatarurl: action.photo });
                return { ...state, repo_comment: fred, repobasedname: fred.filter(data => data.id === action.payload) };
            case 'ID':
                repodata = state.repo_comment;
                dumb = repodata.filter((userid) => {
                    return userid.id === action.payload.data;
                });
                return { ...state, repobasedname: dumb };
            default:
            return state;
    }
};

export default rootReducer;
