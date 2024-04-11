package ch.zhaw.myclient.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.lang.NonNull;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;

@NoArgsConstructor
@RequiredArgsConstructor
@Getter
@Document("asset")
public class Asset {
    @Id
    private String id;
    @NonNull
    private String assetName;
    @NonNull
    private String owner;
    @NonNull
    private String purchaseDate;
    @NonNull
    private String guaranteeEnd;
}
