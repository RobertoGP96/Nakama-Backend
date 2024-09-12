interface elementDir {
    title: string;
    year: string;
    path: string;
    content: string[];
    metadata: createMetadata;
  };

interface elementDirS extends elementDir {
  tmdbid: number
}



  