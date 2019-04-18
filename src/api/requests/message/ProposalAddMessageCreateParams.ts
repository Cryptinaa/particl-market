// Copyright (c) 2017-2019, The Particl Market developers
// Distributed under the GPL software license, see the accompanying
// file COPYING or https://github.com/particl/particl-market/blob/develop/LICENSE

import { MessageCreateParamsInterface } from './MessageCreateParamsInterface';
import * as resources from 'resources';

export interface ProposalAddMessageCreateParams extends MessageCreateParamsInterface {
    title: string;
    description: string;
    options: string[];
    sender: resources.Profile;
    itemHash?: string;
}
