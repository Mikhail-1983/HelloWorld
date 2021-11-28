import {SubstrateExtrinsic,SubstrateEvent,SubstrateBlock} from "@subql/types";
import {StarterEntity} from "../types";
import {Balance} from "@polkadot/types/interfaces";


export async function handleBlock(block: SubstrateBlock): Promise<void> {
    let record = new StarterEntity(block.block.header.hash.toString());
    record.blockHeight = block.block.header.number.toNumber();
    await record.save();
}