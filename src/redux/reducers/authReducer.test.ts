import {
    authReducer,
    changeAuthStatusPreloaderAC,
    getCaptchaAC,
    getMeUserAC,
    setAuthAC,
    StateAuthReducerType
} from './authReducer';

let testState: StateAuthReducerType = {
    dataUser: {
        aboutMe:'',
        userId: '',
        lookingForAJob: true,
        lookingForAJobDescription:"",
        fullName: "",
        contacts: {
            github: "",
            vk: "",
            facebook: "",
            instagram: "",
            twitter: "",
            website: "",
            youtube: "",
            mainLink: "",
        },
        photos: {
            small: "",
            large: "",
        }
    },
    isAuth: false,
    email: null,
    id: null,
    login: null,
    isInitialized: false,
    captcha: null
};

it('checking for status isInitialized changes', () => {
    let newState = authReducer(testState, changeAuthStatusPreloaderAC(true))
    expect(newState.isInitialized).toBe(true)
     newState = authReducer(testState, changeAuthStatusPreloaderAC(false))
    expect(newState.isInitialized).toBe(false)
});

it('checking for legal data entry when logging', () => {
    let testDataUser = {
        aboutMe:'',
        userId: '003242',
        lookingForAJob: true,
        lookingForAJobDescription:"",
        fullName: "Vadim",
        contacts: {
            github: "",
            vk: "",
            facebook: "",
            instagram: "",
            twitter: "",
            website: "",
            youtube: "",
            mainLink: "",
        },
        photos: {
            small: "",
            large: "",
        }
    }

    let newState = authReducer(testState, getMeUserAC(testDataUser))
    expect(newState.dataUser.userId).toBe('003242')
    expect(newState.dataUser.fullName).toBe('Vadim')
});
it('check for adding captcha to state', () => {
    let testCaptcha = 'link to captcha'
    let newState = authReducer(testState, getCaptchaAC(testCaptcha))
    expect(newState.captcha).toBe('link to captcha')
});
it('authorization check', () => {
    let newState = authReducer(testState, setAuthAC('dgahm@mail.ru',12, 'VadimDgah'))
    expect(newState.email).toBe('dgahm@mail.ru')
    expect(newState.login).toBe('VadimDgah')
    expect(newState.id).toBe(12)
});