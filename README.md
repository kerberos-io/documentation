# Kerberos Documentation

And so it began. The documentation of the entire Kerberos.io ecosystem.

Master branch
> [doc.kerberos.io](https://doc.kerberos.io)

Develop branch
> [staging.doc.kerberos.live](https://staging.doc.kerberos.live)

## Development

Install dependencies

    $ yarn install

Run Hugo dev server with auto compile of assets

    $ yarn start

## Formatting notes

**YouTube/Vimeo**

Using Hugo's built-in video shortcodes ([source](https://gohugo.io/content-management/shortcodes/#vimeo)):

    {{< vimeo id="146022717" class="responsive-video ratio-16by10" title="My vimeo video" >}}
    {{< youtube id="w7Ft2ymGmfc" title="A New Hugo Site in Under Two Minutes" >}}

- keep the `responsive-video` class intact
- use `ratio-16by10` or `ratio-4by3` class to fix aspect ratio if video is different than 16:9

## TODO

- config/_default/params.toml
  - [ ] open:graph image
  - [ ] schema logo
  
- nice to haves:
  - [ ] transform colors to CSS vars (and use for easier dark mode)
