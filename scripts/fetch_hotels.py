import urllib.request
import ssl
import time

urls = {
    'graduate_hotel.jpg': 'https://www.graduatehotels.com/cambridge/wp-content/uploads/sites/49/2021/08/Graduate_Cambridge_Exterior_1.jpg',
    'hilton_cambridge.jpg': 'https://www.hilton.com/im/en/STNHCHI/15017282/hilton-cambridge-city-centre-exterior-dusk-02.jpg',
    'hotel_du_vin.jpg': 'https://www.hotelduvin.com/media/6112/cambridge-exterior-1.jpg',
    'university_arms.jpg': 'https://universityarms.com/wp-content/uploads/2020/09/University-Arms-Exterior-1.jpg'
}

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

for filename, url in urls.items():
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'})
        with urllib.request.urlopen(req, context=ctx) as response:
            with open(f'src/assets/{filename}', 'wb') as f:
                f.write(response.read())
        print(f"Downloaded {filename}")
    except Exception as e:
        print(f"Failed to download {filename}: {e}")
