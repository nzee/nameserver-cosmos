// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgDeleteName } from "./types/nameservice/tx";
import { MsgSetName } from "./types/nameservice/tx";
import { MsgBuyName } from "./types/nameservice/tx";
const types = [
    ["/nzee.nameservice.nameservice.MsgDeleteName", MsgDeleteName],
    ["/nzee.nameservice.nameservice.MsgSetName", MsgSetName],
    ["/nzee.nameservice.nameservice.MsgBuyName", MsgBuyName],
];
export const MissingWalletError = new Error("wallet is required");
export const registry = new Registry(types);
const defaultFee = {
    amount: [],
    gas: "200000",
};
const txClient = async (wallet, { addr: addr } = { addr: "http://localhost:26657" }) => {
    if (!wallet)
        throw MissingWalletError;
    let client;
    if (addr) {
        client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
    }
    else {
        client = await SigningStargateClient.offline(wallet, { registry });
    }
    const { address } = (await wallet.getAccounts())[0];
    return {
        signAndBroadcast: (msgs, { fee, memo } = { fee: defaultFee, memo: "" }) => client.signAndBroadcast(address, msgs, fee, memo),
        msgDeleteName: (data) => ({ typeUrl: "/nzee.nameservice.nameservice.MsgDeleteName", value: MsgDeleteName.fromPartial(data) }),
        msgSetName: (data) => ({ typeUrl: "/nzee.nameservice.nameservice.MsgSetName", value: MsgSetName.fromPartial(data) }),
        msgBuyName: (data) => ({ typeUrl: "/nzee.nameservice.nameservice.MsgBuyName", value: MsgBuyName.fromPartial(data) }),
    };
};
const queryClient = async ({ addr: addr } = { addr: "http://localhost:1317" }) => {
    return new Api({ baseUrl: addr });
};
export { txClient, queryClient, };
