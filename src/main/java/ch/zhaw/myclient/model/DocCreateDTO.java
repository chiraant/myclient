package ch.zhaw.myclient.model;

import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class DocCreateDTO {
    private String docTitle;
    private String uploadDate;
    private DocType docType;
}
