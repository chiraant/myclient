package ch.zhaw.myclient.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.lang.NonNull;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@RequiredArgsConstructor
@Setter
@Getter
@Document("asset")
public class Asset {
    @Id
    private String id;
    @NonNull
    private String assetName;
    @NonNull
    private String purchaseDate;
    @NonNull
    private String guaranteeEnd;
    private AssetState assetState = AssetState.Unassigned;
    private String personId;
    private String personEmail;
}
