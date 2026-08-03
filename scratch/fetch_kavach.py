import urllib.request
import re
import json

url = 'https://home.kavachai.in/assets/index-DUJ1XAGA.js'
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
try:
    with urllib.request.urlopen(req) as response:
        js_content = response.read().decode('utf-8')
        
    # Extract string literals
    strings = set(re.findall(r'\"([^\"]{20,})\"', js_content))
    
    text_blocks = []
    for s in strings:
        if ' ' in s and not s.startswith('http') and not s.startswith('function') and '{' not in s:
            text_blocks.append(s)
            
    with open('kavach_content.txt', 'w', encoding='utf-8') as f:
        for t in sorted(text_blocks):
            f.write(t + '\n\n')
            
    print(f'Extracted {len(text_blocks)} text blocks to kavach_content.txt')
except Exception as e:
    print('Failed:', e)
