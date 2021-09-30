// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract Beatmap is ERC721 {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    struct beatmap {
        string tokenId;
        bool IsExist; // This allows to see if map exist while Guard check
    }

    // mapping Beatmap CID -> tokenId
    mapping(string => uint256) private _mapTokens;

    constructor() ERC721("Beatmap", "BMap") {
        _setBaseURI("ipfs://");
    }

    function mintToken(
        address owner,
        string memory metadataURI,
        string memory assetCId
    ) public returns (uint256) {
        require(
            !_mapTokens[assetCId].IsExist,
            "Beatmap already registered in the system."
        );

        _tokenIds.increment();

        uint256 id = _tokenIds.current();
        _safeMint(owner, id);
        _setTokenURI(id, metadataURI);
        _mapTokens(assetCId, id);
        beatmap memory newBeatmap = beatmap(id, true);
        _mapTokens[assetCId] = newBeatmap;
        return id;
    }
}
