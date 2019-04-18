// Copyright (c) 2017-2019, The Particl Market developers
// Distributed under the GPL software license, see the accompanying
// file COPYING or https://github.com/particl/particl-market/blob/develop/LICENSE

import { inject, named } from 'inversify';
import { Logger as LoggerType } from '../../../../core/Logger';
import { Core, Types } from '../../../../constants';
import { BidMessage } from '../../../messages/action/BidMessage';
import { MPAction } from 'omp-lib/dist/interfaces/omp-enums';
import { MessageFactoryInterface } from '../MessageFactoryInterface';
import { BidRejectMessageCreateParamsDEPRECATED } from '../../../requests/message/MessageCreateParamsInterface';
import { BidRejectMessage } from '../../../messages/action/BidRejectMessage';

export class BidRejectMessageFactory implements MessageFactoryInterface {

    public log: LoggerType;

    constructor(
        @inject(Types.Core) @named(Core.Logger) public Logger: typeof LoggerType
    ) {
        this.log = new Logger(__filename);
    }

    /**
     *
     * @param params
     *      bidHash: string
     * @returns {Promise<BidRejectMessage>}
     */
    public async get(params: BidRejectMessageCreateParamsDEPRECATED): Promise<BidRejectMessage> {

        const message = {
            type: MPAction.MPA_REJECT,
            bid: params.bidHash                       // hash of MPA_BID
        } as BidRejectMessage;

        return message;
    }

}
