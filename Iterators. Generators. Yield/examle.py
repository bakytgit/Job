def flat_generator(nested_list):
    """
    Генератор для создания плоского списка из вложенного списка.

    Args:
        nested_list: Вложенный список.

    Yields:
        Элементы плоского списка.
    """

    for element in nested_list:
        if isinstance(element, list):
            yield from flat_generator(element)
        else:
            yield element

def test():
    nested_list = [[1, 2, 3], [4, [5, 6]], 7]
    flat_list = list(flat_generator(nested_list))
    assert flat_list == [1, 2, 3, 4, 5, 6, 7], "Test failed"
    print("Test passed")

if __name__ == "__main__":
    test()