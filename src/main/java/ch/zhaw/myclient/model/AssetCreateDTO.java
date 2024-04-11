package ch.zhaw.myclient.model;

import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class AssetCreateDTO {
    private String assetName;
    private String purchaseDate;
    private String owner;
    private String guaranteeEnd;
    
   
}
