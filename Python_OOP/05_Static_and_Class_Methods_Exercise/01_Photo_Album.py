class PhotoAlbum:
    def __init__(self, pages):
        self.pages = pages
        self.photos = [[] for i in range(pages)]
        self.page_index = 0

    @classmethod
    def from_photos_count(cls, photos_count):
        cls(photos_count // 4)

    def is_space(self):
        return self.page_index < self.pages and \
               len(self.photos[self.page_index]) < 4

    def new_page(self):
        if len(self.photos[self.page_index]) == 4:
            self.page_index += 1
        return self.page_index

    def add_photo(self, label):
        if not self.is_space():
            return 'No more free slots'
        self.photos[self.page_index].append(label)
        photo_added = f'{label} photo added successfully on page ' \
                      f'{self.page_index + 1} slot {len(self.photos[self.page_index])}'
        self.new_page()
        return photo_added

    def display(self):
        dashes = '-' * 11 + '\n'
        result = dashes
        for i in self.photos:
            if i:
                result += ''.join('[] ' for p in range(len(i))).strip()
            result += '\n' + dashes
        return result


album = PhotoAlbum(2)

print(album.add_photo("baby"))
print(album.add_photo("first grade"))
print(album.add_photo("eight grade"))
print(album.add_photo("party with friends"))
print(album.photos)
print(album.add_photo("prom"))
print(album.add_photo("wedding"))
