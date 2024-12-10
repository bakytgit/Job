class FlatIterator:
    def __init__(self, iterable):
        self.iterables = [iter(iterable)]

    def __iter__(self):
        return self

    def __next__(self):
        while self.iterables:
            try:
                return next(self.iterables[0])
            except StopIteration:
                self.iterables.pop(0)
        raise StopIteration

# Пример использования с различными итерируемыми объектами:
list_of_lists = [[1, 2, 3], [4, 5], (6, 7)]
flat_iterator = FlatIterator(list_of_lists)
for item in flat_iterator:
    print(item)