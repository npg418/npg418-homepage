import { daily } from 'deno-cron';

const url = Deno.env.get('DOMAIN_UPDATE_URL')
const credential = Deno.env.get('DOMAIN_UPDATE_CREDENTIAL')

if (url && credential) {
    // TO-DO: 動作確認の削除
    ['4', '6'].forEach(v => {
        fetch(url.replace('{version}', v), {
            headers: {
                Authorization: `Basic ${btoa(credential)}`
            }
        })
    })

    daily(() => {
        ['4', '6'].forEach(v => {
            fetch(url.replace('{version}', v), {
                headers: {
                    Authorization: `Basic ${btoa(credential)}`
                }
            })
        })
    })
}
