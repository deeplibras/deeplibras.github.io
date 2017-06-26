<footer class="footer">
    <div class="sponsors">
        <div class="sponsor">
            <div class="sponsor-text has-small-text">
                {{ __('footer.promotion') }}
            </div>
            <div class="sponsor-image">
                <a target="_blank" href="http://ifsp.edu.br">
                    {{ image_tag('images/sponsors/ifsp.png') }}
                </a>
            </div>
        </div>

        <div class="sponsor">
            <div class="sponsor-text has-small-text">
                {{ __('footer.sponsor') }}
            </div>
            <div class="sponsor-image">
                <a target="_blank" href="http://github.com">
                    {{ image_tag('images/sponsors/github.png') }}
                </a>
            </div>
        </div>

        <div class="sponsor">
            <div class="sponsor-text has-small-text">
                {{ __('footer.support') }}
            </div>
            <div class="sponsor-image">
                <a target="_blank" href="http://caraguatatuba.sp.gov.br">
                    {{ image_tag('images/sponsors/caragua.png') }}
                </a>
            </div>
        </div>
    </div>

</footer>
<div class="after-footer has-small-text">
    <div class="left">
        &copy; {{ date(Date.now(), "Y") }} DeepLIBRAS
    </div>

    <div class="right">
        {{ __('footer.last_update') }}: {{ date(Date.now(), 'LL') }}
    </div>
</div>