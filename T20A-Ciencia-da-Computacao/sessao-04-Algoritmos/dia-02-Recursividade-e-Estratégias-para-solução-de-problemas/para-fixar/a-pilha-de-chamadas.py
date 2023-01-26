def add(n):
    if n == 0:
        return 0
    else:
        return n + add(n-1)


add(4)
print(f"🔥🔥🔥{add(4)}")
