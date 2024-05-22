package ch.zhaw.myclient.model;

import com.mongodb.lang.NonNull;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
@Setter
@Getter
@NoArgsConstructor

public class AssetStateChangeDTO {
    @NonNull
    private String assetId;
    private String assetName;
    private String personEmail;
}
