package ch.zhaw.myclient.model;

import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor

public class AssetStateChangeDTO {
    private String assetId;
    private String assetName;
    private String personEmail;
}
