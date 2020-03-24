import { AxiosInstance } from "axios";
import { Store } from "redux";
import { Storage } from "services/storage";
import { IApi } from "services/api/types";
import { IStoreState } from "store/types";

export declare global {
  interface Window {
    // Your custom global property
    __INITIAL_STATE__: IStoreState;
    $api: IApi;
    $http: AxiosInstance;
    $store: Store;
    $storage: Storage;
    _temp: any;
  }
}
