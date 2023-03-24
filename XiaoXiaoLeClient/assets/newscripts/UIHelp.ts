import { Network } from "./network/Network";

export class UIHelp {

    public static network: Network = null;

    public static init() {
        // 新建一个网络单例
        UIHelp.network = SingletonFactory.getInstance(Network);
    }

    

}
export default new UIHelp();
export class SingletonFactory {

    private static instances: Map<{ new() }, Object> = new Map<{ new() }, Object>();

    public static getInstance<T>(c: { new(): T }): T {
        if (!SingletonFactory.instances.has(c)) {
            let obj = new c();
            SingletonFactory.instances.set(c, obj);
            return obj;
        }
        return <T>SingletonFactory.instances.get(c);
    }
}
