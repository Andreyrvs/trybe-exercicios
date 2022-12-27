from codigo import is_odd

def test_is_odd_when_number_is_ood_return_true():
    'Para um número ímpar a função deve retornar o valor True'
    assert is_odd(3) is True


def test_is_odd_when_number_is_ood_return_false():
    'Para um número par a função deve retornar o valor False'
    assert is_odd(2) is False

