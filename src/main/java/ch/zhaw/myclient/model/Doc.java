package ch.zhaw.myclient.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;

@NoArgsConstructor
@RequiredArgsConstructor
@Getter
@Document("doc")
public class Doc {
    @Id
    private String id;
    @NonNull
    private String title;
    @NonNull
    private String uploadDate;
}
