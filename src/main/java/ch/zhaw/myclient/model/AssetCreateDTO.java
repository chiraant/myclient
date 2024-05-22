package ch.zhaw.myclient.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.Setter;
@Setter
@Getter
@NoArgsConstructor
public class AssetCreateDTO {
    @NonNull
    private String assetName;
    @NonNull
    private String purchaseDate;
    @NonNull
    private String guaranteeEnd;
    private AssetState assetState;
    
   
}
