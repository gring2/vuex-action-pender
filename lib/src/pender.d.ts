import { Store } from 'vuex';
declare type penderObjs = {
    action: (store: Store<any>, payload: any) => Promise<any> | void;
    pending?: (store: Store<any>, payload: any) => void;
    success?: (store: Store<any>, payload: any) => void;
    fail?: (store: Store<any>, payload: any) => void;
};
export declare const createPender: ({ action, pending, success, fail }: penderObjs) => (store: Store<any>, payload: any) => void;
export {};
